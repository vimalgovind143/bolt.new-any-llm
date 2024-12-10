export async function loader({ request, _params }: { request: Request; _params: { '*': string } }) {
  const url = new URL(request.url);
  const targetUrl = 'https://api.novita.ai/v3/openai/models' + url.pathname.replace('/novita-api', '');

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        Origin: url.origin,
      },
      body: request.method !== 'GET' ? await request.text() : undefined,
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ error: 'Proxy Error', message: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export async function action({ request, _params }: { request: Request; _params: { '*': string } }) {
  return loader({ request, _params });
}
