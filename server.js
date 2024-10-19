import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Endpoint to handle video download requests
app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send({ error: 'URL is required' });
    }

    try {
        const videoId = ytdl.getVideoID(url);
        const info = await ytdl.getInfo(videoId);
        const formats = info.formats; // Get available formats

        // You could send back the formats to the client if needed
        res.json({
            title: info.videoDetails.title,
            formats: formats.map(format => ({
                quality: format.qualityLabel,
                itag: format.itag,
                hasAudio: format.hasAudio,
                hasVideo: format.hasVideo,
                codecs: format.codecs,
            })),
        });
    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).send({ error: 'Failed to download video' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
