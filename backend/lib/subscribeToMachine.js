
async function subscribeToMachine(machineId) {
    try {
        // Modify the callback URL to include the machine_id as a query parameter
        const backendUrl=process.env.BACKEND_URL
        const callbackUrl = `${backendUrl}/machines_data/${machineId}`;

        const response = await axios.post('https://manufcaturing-challenge-production.up.railway.app/Webhook', {
            machine: machineId,
            callback_url: callbackUrl // Use the modified callback URL
        });
        console.log('Subscribed successfully:', response.data);
    } catch (error) {
        console.error('Subscription error:', error);
    }
}