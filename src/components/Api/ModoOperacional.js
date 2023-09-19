import React, { useState } from 'react';

function Api() {
    const [api, setApi] = useState(1);
    const ipOperacional = ["http://192.168.0.50:5000",
        "https://dagesico.pythonanywhere.com"]
        return ipOperacional[api]
}

export default Api;