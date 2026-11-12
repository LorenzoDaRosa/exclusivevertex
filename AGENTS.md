<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep page-specific SEO in leaf route head() and organization defaults in the root, with no root share image, to avoid cross-page preview overrides.
- Animated headings expose a static accessible label and counters render their final values during SSR, preserving the approved visuals while making initial HTML meaningful.
- Keep private agency management in schema-validated admin server functions and admin-prefixed tables; all handlers and RLS require a separately provisioned admin role, never signup metadata.
- Represent each financial installment as one payable row and calculate cash from paid dates, not contracted project values, to prevent double counting.
- Convert leads into clients through a locking, idempotent database function keyed by source lead to prevent duplicates.
- Keep admin styles scoped and private screens outside the public navigation and sitemap to preserve the public brand.
- Use a client-only pathless admin gate with /admin/login redirects, revalidated getUser, and a role check; server functions independently enforce the same role for every operation.
