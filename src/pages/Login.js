import { PageTemplate } from "../templates/PageTemplate.js";
import { loginForm } from "../ui/forms/LoginForm.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageLogin extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Login')}
                ${loginForm()}
            </main>`;
    }
}