export default function handler(req, res) {
    const passcode = req.body.passcode;
    res.status(200).json({ passcode: passcode });
}
