import NotionPageToHtml from "notion-page-to-html"

exports.handler = async function (event, context) {
	const authToken = process.env.TOKEN;
	const { url, token } = event.queryStringParameters;

	if (!token) {
		return {
			statusCode: 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ error: 'Missing auth token.' }),
		}
	}

	if (token !== authToken) {
		return {
			statusCode: 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ error: 'Invalid auth token.' }),
		}		
	}

	if (!url) {
		return {
			statusCode: 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ error: 'Missing url to convert.' }),
		}
	}

	try {
		// const { title, icon, cover, html } = await NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f");
		const { html } = await NotionPageToHtml.convert(url, {
			bodyContentOnly: true,
			excludeHeaderFromBody: true,
			excludeScripts: true,
			excludeMetadata: true,
			excludeCSS: true
		});



		return {
			statusCode: 200,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({content: html}),
		}
	} catch (e) {
		return {
			statusCode: 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ error: error }),
		}		
	}

};


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
