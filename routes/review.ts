import express from 'express';

const routes = express.Router();

routes.get("/review", (req, res) => {
    res.render("review-form");
});

routes.get("/review-results", (req, res) => {
    const name = req.query.name;
    const comment = req.query.comment;
    const rating: number = parseInt(req.query.rating as string);
    res.render("review-results", { name, comment, rating });
});

export default routes;