const API_BASE_URL = 'http://localhost:8000/api';

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Could not fetch ${endpoint}:`, error);
        return null;
    }
}

function getHeroData() {
    return fetchData('hero');
}

function getAboutData() {
    return fetchData('about');
}

function getSkillsData() {
    return fetchData('skills');
}

function getProjectsData() {
    return fetchData('projects');
}

function getExperienceData() {
    return fetchData('experience');
}

function getSocialLinksData() {
    return fetchData('social-links');
}

async function postContactMessage(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Could not post contact message:', error);
        return null;
    }
}
