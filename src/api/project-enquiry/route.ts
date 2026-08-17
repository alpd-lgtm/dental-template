import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type ProjectEnquiry = {
  business?: string;
  email?: string;
  phone?: string;
  currentWebsite?: string;
  budget?: string;
  message?: string;
  companyFax?: string;
  carePlan?: boolean;
  websiteType?: string;

  selectedTemplate?: {
    name?: string;
    type?: string;
  } | null;
};

function clean(
  value: unknown,
  maxLength = 1000,
) {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(
  request: Request,
) {
  try {
    const body =
      (await request.json()) as ProjectEnquiry;

    /* =====================================================
       CLEAN INPUTS
    ====================================================== */

    const business = clean(
      body.business,
      120,
    );

    const email = clean(
      body.email,
      254,
    );

    const phone = clean(
      body.phone,
      50,
    );

    const currentWebsite = clean(
      body.currentWebsite,
      300,
    );

    const budget = clean(
      body.budget,
      100,
    );

    const message = clean(
      body.message,
      1000,
    );

    const companyFax = clean(
      body.companyFax,
      200,
    );

    const websiteType = clean(
      body.websiteType ||
        "Ready-Made Website",
      100,
    );

    const carePlan =
      Boolean(body.carePlan);

    const selectedTemplateName =
      clean(
        body.selectedTemplate?.name ||
          "BrightSmile Dental",
        150,
      );

    const selectedTemplateType =
      clean(
        body.selectedTemplate?.type ||
          "Dental Clinic Website Design",
        150,
      );

    /* =====================================================
       HONEYPOT
    ====================================================== */

    if (companyFax) {
      return Response.json({
        success: true,
      });
    }

    /* =====================================================
       REQUIRED FIELDS
    ====================================================== */

    if (!business || !email) {
      return Response.json(
        {
          error:
            "Business name and email address are required.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       EMAIL VALIDATION
    ====================================================== */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       EMAIL
    ====================================================== */

    const subject = `New Dental Website Enquiry — ${business}`;

    const emailText = [
      "NEW AXIS STUDIO WEBSITE ENQUIRY",
      "",
      "================================",
      "SELECTED DESIGN",
      "================================",
      `Design: ${selectedTemplateName}`,
      `Design type: ${selectedTemplateType}`,
      `Website type: ${websiteType}`,
      "",
      "================================",
      "CUSTOMER DETAILS",
      "================================",
      `Business: ${business}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "================================",
      "PROJECT DETAILS",
      "================================",
      `Existing website: ${
        currentWebsite || "Not provided"
      }`,
      `Approximate budget: ${
        budget || "Not provided"
      }`,
      `Website Care Plan: ${
        carePlan
          ? "Interested"
          : "Not selected"
      }`,
      "",
      "Project notes:",
      message || "Not provided",
      "",
      "================================",
      "Submitted through the BrightSmile Dental",
      "Axis Studio demo website.",
    ].join("\n");

    /* =====================================================
       SEND WITH RESEND
    ====================================================== */

    const { data, error } =
      await resend.emails.send({
        from: "Axis Studio Website <enquiries@send.axistudio.studio>",

        to: [
          "contact@axistudio.studio",
        ],

        subject,

        text: emailText,

        replyTo: email,
      });

    /* =====================================================
       RESEND ERROR
    ====================================================== */

    if (error) {
      console.error(
        "BrightSmile Dental enquiry Resend error:",
        error,
      );

      return Response.json(
        {
          error:
            "We couldn't send your enquiry. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    /* =====================================================
       SUCCESS
    ====================================================== */

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "BrightSmile Dental project enquiry error:",
      error,
    );

    return Response.json(
      {
        error:
          "Something went wrong while sending your enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}