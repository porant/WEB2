
    const url = "https://coolify.porant.de/api/v1/resources";
    const TOKEN = "1|JC1PmgnnmEU8ivbk0OVGn62pBGrYrYVXfL2XELlI9608603c";

    export async function callAPI() {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    export async function getAPPS() {
        let data = await callAPI();

        let APPS = data.map((/** @type {{ name: any; status: any; }} */ item) => ({
            name: item.name,
            status: item.status
        }));
        return APPS;
    }
