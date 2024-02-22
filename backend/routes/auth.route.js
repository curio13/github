import express from 'express';

const router = express.Router();

router.get("/github", (req, res) => {
    res.send("U logged in");
})

export default router;