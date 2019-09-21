const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/iyzipay', requireLogin, async (req, res) => {
        /*const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "$5 for 5 credits"
          });*/

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};