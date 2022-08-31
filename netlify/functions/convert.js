exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello World" }),
	}
};


//import NotionPageToHtml from "notion-page-to-html"

// export default {
// 	async fetch(request) {
// 		const { searchParams } = new URL(request.url)
// 		const url = searchParams.get('url');
// 		const baseUrl = 'https://rugradiohq.notion.site/';

// 		if (typeof url === 'undefined' || !url) {
// 			return new Response('No ID found.', {
// 				status: 500
// 			});
// 		}

// 		if (!url.includes(baseUrl)) {
// 			return new Response('Not a valid url.', {
// 				status: 500
// 			});
// 		}
// 		return new Response(url);

// 		// const { title, icon, cover, html } = await NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f");
// 		//const page = await NotionPageToHtml.convert(url);

// 		//return new Response(page);
// 	},
// };
