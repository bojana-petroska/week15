let users = [
    {
        id: 1,
        name: 'bo',
        age: 15,
    },
    {
        id: 2,
        name: 'nikita',
        age: 20,
    },
    {
        id: 3,
        name: 'mia',
        age: 25,
    },
    {
        id: 4,
        name: 'maja',
        age: 16,
    },
];
const getAll = (req, res) => {
    const ageLimit = Number(req.query.ageLimit || 0);
    users = users.filter((user) => user.age > ageLimit);
    console.log(ageLimit);
    res.json(users);
};
const get = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).json({ message: 'user not found' });
    }
    res.status(200).json(user);
};
const post = (req, res) => {
    const id = Math.floor(Math.random() * 1000);
    const user = Object.assign(Object.assign({}, req.body), { id });
    users.push(user);
    res.status(201).json(user);
};
const put = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = Object.assign(Object.assign({}, req.body), { id });
    users = users.map((user) => {
        if (user.id === id) {
            return updatedUser;
        }
        return user;
    });
    res.json(updatedUser);
};
const remove = (req, res) => {
    const id = parseInt(req.params.id); // {id} = req.params
    users = users.filter((user) => user.id === id);
    res.json({ message: 'user deleted successfully' });
};
export default { getAll, get, post, put, remove };
