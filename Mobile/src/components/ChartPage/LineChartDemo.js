import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";

const LineChartDemo = () => {
    const [revenue, setRevenueData] = useState([]);
    const [dataChart, setDataChart] = useState();
    const { width } = useWindowDimensions();


    // 1,2 đang làm 2 của supplier, thay đổi api để call tới 1
    useEffect(() => {
        const getDetailProduct = async () => {
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken');
                const res = await authApi.analysisRevenueInMonthsBySupplier("09/2022", "4/2024", {
                    "token": token,
                })
                setRevenueData(res.data.data.monthlyRevenues);

                if (Array.isArray(res.data.data.monthlyRevenues)) {
                    const months = [];
                    const revenues = [];
                    res.data.data.monthlyRevenues.forEach(data => {
                        months.push(`${data.month}, ${data.year}`);
                        revenues.push(data.totalRevenue);
                    });
                    setDataChart({
                        labels: months,
                        datasets: [
                            {
                                data: revenues,
                                color: () => 'green',
                                strokeWidth: 4,
                            }
                        ],
                        legend: ['revenue']
                    })
                } else {
                    throw new Error("Error: 'monthlyRevenues' is not an array");
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        getDetailProduct();
    }, []);

    // //6, 8 đang làm 8 của supplier, thay đổi api đẻ view admin
    // useEffect(() => {
    //     const getDetailProduct = async () => {
    //         try {
    //             const token = "bearer " + await AsyncStorage.getItem('userToken');
    //             const res = await authApi.analysisCompleteInMonthsBySupplier("09/2022", "4/2024", {
    //                 "token": token,
    //             })
    //             setRevenueData(res.data.data.monthlyRevenues);

    //             if (Array.isArray(res.data.data.monthlyRevenues)) {
    //                 const months = [];
    //                 const revenues = [];
    //                 res.data.data.monthlyRevenues.forEach(data => {
    //                     months.push(`${data.month}, ${data.year}`);
    //                     revenues.push(data.count);
    //                 });
    //                 setDataChart({
    //                     labels: months,
    //                     datasets: [
    //                         {
    //                             data: revenues,
    //                             color: () => 'green',
    //                             strokeWidth: 4,
    //                         }
    //                     ],
    //                     legend: ['revenue']
    //                 })
    //             } else {
    //                 throw new Error("Error: 'monthlyRevenues' is not an array");
    //             }
    //         } catch (error) {
    //             console.log("Error fetching data:", error);
    //         }
    //     }
    //     getDetailProduct();
    // }, []);


    if (!dataChart) {
        // Add a loading indicator or other UI while data is being fetched
        return null;
    }

    return (
        <View>
            <Text>Line chart demo</Text>
            <LineChart
                data={dataChart}
                yAxisLabel=""
                width={width}
                height={600}
                chartConfig={{
                    backgroundGradientFrom: 'orange',
                    backgroundGradientFromOpacity: 0.2,
                    backgroundGradientTo: 'orange',
                    backgroundGradientToOpacity: 0.8,
                    color: (opacity = 0.999) => `rgba(0, 0, 0, ${opacity})`,
                    barPercentage: 0.7,
                    propsForDots: {
                        r: '3',
                        strokeWidth: '2',
                        stroke: 'black',
                    },
                }}
                style={{ borderColor: 'white', borderWidth: 1 }}
                withInnerLines={true}
                withShadow={true}
                getDotColor={() => 'yellow'}
                hidePointsAtIndex={[0]}
                verticalLabelRotation={50}
                horizontalLabelRotation={60}
            />
        </View>
    );
};

export default LineChartDemo;
