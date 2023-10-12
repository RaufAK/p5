// lib/fetchModelData.js
function FetchModel(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    resolve({ data });
                } catch (error) {
                    reject({
                        status: xhr.status,
                        statusText: 'Invalid JSON data',
                    });
                }
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: xhr.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    });
}

export default FetchModel;
