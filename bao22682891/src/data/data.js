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
    };

export const updateData = async (id, data) => {
    try {
        const response = await fetch(
            "https://67e253ad97fc65f535357730.mockapi.io/Customers",
            {
                method : "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type" : "application/json",
                }

            },
        );
            if (response.ok) {
                return {message: "ADDED"}
            }
    
            return {message: "Failed"};
    }catch (error) {
        console.error("error", error)
    } 
};
