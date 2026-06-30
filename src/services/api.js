// This is the source URL for our Rails API.
// Stored in one place for traceability and future-proof change.
const BASE_URL = "http://localhost:3000";

// This function fetches the dashboard metrics from Rails.BASE_URL
// It returns a Promise - meaning the data won't arrive instantly,
//  it'll come back "eventually" (async).
export async function getDashboardMetrics(){
    const response = await fetch (`${BASE_URL}/dashboard`);

    //  If Rails returns an error status (e.g 500) we throw
    // so the component can catch it and show a friendly msg
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
}

// The specific React concepts used:
// async/await (MDN) — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// fetch API (MDN) — https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch