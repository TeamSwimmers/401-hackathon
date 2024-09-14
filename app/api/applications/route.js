let applications = [];

export async function GET(request) {
    return new Response(JSON.stringify(applications), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    const newApplication = await request.json();
    applications.push(newApplication);
    return new Response(JSON.stringify({ message: 'Application added!', applications }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(request) {
    const updatedApplication = await request.json();
    const index = applications.findIndex(app => app.id === updatedApplication.id);

    if (index !== -1) {
        applications[index] = updatedApplication;
        return new Response(JSON.stringify({ message: 'Application updated!', applications }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Application not found!' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE(request) {
    const { id } = await request.json();
    const index = applications.findIndex(app => app.id === id);

    if (index !== -1) {
        applications.splice(index, 1);
        return new Response(JSON.stringify({ message: 'Application deleted!', applications }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Application not found!' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

