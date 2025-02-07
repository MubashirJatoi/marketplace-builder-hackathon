


const orderSchema = {
    name : "order",
    type : "document",
    title : "Order",
    fields : [
        {
            name : "firstName",
            type : "string",
            title : "First Name"
        },
        {
            name : "lastName",
            type : "string",
            title : "Last Name"
        },
        {
            name : "address",
            type : "string",
            title : "Address"
        },
        {
            name : "postalCode",
            type : "string",
            title : "Postal Code"
        },
        {
            name : "city",
            type : "string",
            title : "City",
        },
        {
            name: "email",
            type: "string",
            title: "Email",
        },
        {
            name : "phone",
            type : "string",
            title : "Phone"
        },
        {
            name : "cartItems",
            type : "array",
            title : "Cart Items",
            of : [{ type: 'reference', to: [{ type: "product" }] }]
        },
        {
            name : "total",
            type : "number",
            title : "Total"
        },
        {
            name : "status",
            type : "string",
            title : "Status",
            options : {
                list : [
                    { title : "Pending", value : "pending" },
                    { title : "Processing", value : "processing" },
                    { title : "Shipped", value : "shipped" },
                    { title : "Delivered", value : "delivered" },
                    { title : "Cancelled", value : "cancelled" },
                ],
                layout : 'radio'
            },
            initialValue : 'pending'
        },
        {
            name: "orderDate",
            type: "datetime",
            title: "Order Date"
        },
    ],
}

export default orderSchema;