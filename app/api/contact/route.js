export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    const access_key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!access_key) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing server env WEB3FORMS_ACCESS_KEY",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const formData = new FormData();
    formData.append("name", name || "");
    formData.append("email", email || "");
    formData.append("message", message || "");
    formData.append("access_key", access_key);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
