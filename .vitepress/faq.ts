import type { MarkdownRenderer } from "vitepress";
import markdownItContainer from "markdown-it-container";

export function registerFaqContainer(md: MarkdownRenderer) {
    md.use(markdownItContainer, "faq", {
        render(tokens, idx, _options, env) {
            const token = tokens[idx];

            if (token.nesting === -1) {
                return "</div></details>\n";
            }

            const question = token.info.trim().slice("faq".length).trim();
            const defaultTitle = env.relativePath?.startsWith("fa/")
                ? "پرسش"
                : "Question";
            const title = md.renderInline(question || defaultTitle, {
                references: env.references,
            });
            // VitePress moves optional {#custom-id} values into token attributes.
            const attrs = md.renderer.renderAttrs(token);

            return `<details class="faq-item"${attrs}><summary><span>${title}</span><svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary><div class="faq-answer">\n`;
        },
    });
}
