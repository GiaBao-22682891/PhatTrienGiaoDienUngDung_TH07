export const getData = async () =>
    {
        try {
            const response = await fetch(
                "https://67e253ad97fc65f535357730.mockapi.io/Customers"
            );
    
            if (response.ok) {
                return await response.json()
            }
    
            return[];
        } catch (error) {
            console.error("error", error)
        }
    }