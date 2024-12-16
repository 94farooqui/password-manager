export const fetchPasswords = async () => {
    const { data } = await axios.get("/api/passwords");
    return data
};

export const addPassword = async (passwordData) => {
    const { data } = await axios.post("/api/passwords", passwordData);
    return data
};