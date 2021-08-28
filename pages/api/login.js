export default function handler(req, res) {
    const loginid = req.body.loginid;
    res.status(200).json({ loginid: loginid });
}
