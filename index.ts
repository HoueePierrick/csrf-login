import dotenv from "dotenv";
import request from "request-promise";
// Create a jar for request
const cookieJar = request.jar();
const strongRequest = request.defaults({ jar: cookieJar });
// cookieJar. then test functions

dotenv.config();
const password = process.env.PASSWORD;

async function main() {
  const result = await strongRequest.get("https://internshala.com/");
  const cookieString = cookieJar.getCookieString("https://internshala.com/");
  const splittedByCsrfCookieName = cookieString.split("csrf_cookie_name=");
  const csrf_test_name = splittedByCsrfCookieName[1].split(";")[0];
  const loginresult = await strongRequest.post(
    "https://internshala.com/login/verify_ajax/user",
    {
      form: {
        csrf_test_name,
        email: "houee.pierrick@gmail.com",
        password: password,
      },
    }
  );
  console.log(loginresult);
}

main();
