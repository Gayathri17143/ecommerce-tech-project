import { Avatar, Rate, Space, Table, Typography, Button } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";
import axios from 'axios'
function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const handleEdit = (record) => {
    // Implement edit functionality
    console.log("Edit record:", record);
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/orders/${id}`);
        getOrders();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table bordered
        loading={loading}
        columns={[
          {
            title: "Order ID",
            dataIndex: "orderId",
          },
          {
            title: "Customer Name",
            dataIndex: "customerName",
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Date",
            dataIndex: "date",
            render: (value) => new Date(value).toLocaleDateString(),
          },
          {
            title: "Payment Status",
            dataIndex: "paymentStatus",
          },
           
          {
            title: "Payment Method",
            dataIndex: "paymentMethod",
          },
          {
            title: "Order Status",
            dataIndex: "orderStatus",
          },
        
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
         
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
              <Space size="middle">
                <Button type="primary" onClick={() => handleEdit(record)}>
                  Edit
                </Button>
                <button onClick={() => handleDelete(Orders.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Orders;
