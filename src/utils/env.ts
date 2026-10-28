/** Staging/demo deploys set NOINDEX=1 so previews stay out of search engines. */
export const NOINDEX = Boolean(process.env.NOINDEX);

/** Microsoft Clarity project ID; analytics stay off while unset. */
export const CLARITY_ID = process.env.PUBLIC_CLARITY_ID;
