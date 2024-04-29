const Razorpay = require('razorpay');
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_secret:  'flbAIUyR66khpeEsenQUO0l5',
});

const createOrder = async (req, res) => {
    try {
        // Extract amount and other necessary data from request body
        const { name, phone, regNumber, password, courseCode, amount } = req.body;

        // Convert amount to paise (Razorpay expects amount in paise)
        const amountInPaise = amount * 100;

        // Create options for the Razorpay order
        const options = {
            amount: amountInPaise,
            currency: 'INR',
            receipt: 'razorUser@gmail.com',
            payment_capture: '1' // Auto capture payment
        };

        // Create the Razorpay order
        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                console.error('Error creating Razorpay order:', err);
                return res.status(500).json({ success: false, error: 'Could not create order' });
            }

            // Order created successfully, send response with order details
            return res.status(200).json({
                success: true,
                order_id: order.id,
                amount: order.amount,
                
            });
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = {
    createOrder
};
