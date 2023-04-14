let videos = [
    {
        title: "first videos",
        rating: 5,
        comments: 2,
        createAt: "2 min ago",
        view: 59,
        id: 1,
    },
    {
        title: "second videos",
        rating: 5,
        comments: 2,
        createAt: "2 min ago",
        view: 59,
        id: 2,
    },
    {
        title: "third videos",
        rating: 5,
        comments: 2,
        createAt: "2 min ago",
        view: 59,
        id: 3,
    },
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search videos");

export const see = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const upload = (req, res) => res.send("upload video");
export const remove = (req, res) => res.send("delete video");
