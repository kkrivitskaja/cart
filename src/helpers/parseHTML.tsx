import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const parseHTML = (htmlString:string) => {
    const cleanHTML = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true } });
    const html = parse(cleanHTML);
    return html;
};

export default parseHTML;
