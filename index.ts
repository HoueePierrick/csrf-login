import request from "request-promise";

async function main() {
  const result = await request.get("https://internshala.com/");
  const loginresult = await request.post(
    "https://internshala.com/login/verify_ajax/user",
    {
      form: {
        email: "houee.pierrick@gmail.com",
        password: "Fidji18ans",
      },
    }
  );
}

main();
