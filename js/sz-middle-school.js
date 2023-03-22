const { createApp, ref, reactive, onMounted, onUnmounted, nextTick } = Vue

const app = createApp({
    // template: '#app',
    setup() {
        const bookDataOptions = ref(null)
        onMounted(() => {
            bookDataOptions.value = {
                top: 'center',
                left: 'center',
                series: [
                    {
                        type: 'pie',
                        radius: ['60%', '80%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: function (params) {
                                return `{a|${params.percent.toFixed(0)}%}`;
                            },
                            color: '#fff',
                            fontSize: 14,
                            rich: {
                                a: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    borderRadius: 4,
                                    padding: 6
                                }
                            }
                        },
                        labelLine: {
                            show: true,
                            length: -5, // 设置引导线长度
                            length2: -10, // 设置引导线第二段长度
                            lineStyle: {
                                color: 'transparent'
                            }
                        },
                        startAngle: 0,
                        clockwise: true,
                        color: [
                            new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                                { offset: 0, color: 'rgba(37, 190, 238, 1)' },
                                { offset: 1, color: 'rgba(37, 190, 238, 0)' }
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                                { offset: 0, color: 'rgba(35, 128, 238, 1)' },
                                { offset: 1, color: 'rgba(35, 128, 238, 0)' }
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                                { offset: 0, color: 'rgba(76, 210, 43, 1)' },
                                { offset: 1, color: 'rgba(76, 210, 43, 0)' }
                            ]),
                        ],
                        data: [
                            { name: 'nigang', value: 60 },
                            { name: 'dongmen', value: 25 },
                            { name: 'chuzhong', value: 15 }
                        ],
                    }
                ]
            }
        })

        const borrowDataOptions = ref(null)
        onMounted(() => {
            borrowDataOptions.value = {
                grid: {
                    left: 0,
                    top: 0,
                    width: 375,
                    height: 165,
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    min: 100,
                    axisLine: {
                        show: true,
                        onZero: false,
                        lineStyle: {
                            color: 'rgba(24, 127, 172, 0.2)'
                        }
                    },
                    axisLabel: {
                        color: 'rgba(75, 146, 186, 1)',
                        fontSize: 12,
                        margin: 10
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(24, 127, 172, 0.2)'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    offset: 0,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: 'rgba(75, 146, 186, 1)',
                        fontSize: 14,
                        margin: 16
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(24, 127, 172, 0.2)'
                        }
                    },
                    data: ['初中', '东门', '泥岗'],
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 18,
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(0, 45, 67, 1)'
                        },
                        label: {
                            show: true,
                            fontSize: 14,
                            position: 'inside',
                        },
                        markPoint: {
                            symbol: 'rect',
                            symbolSize: [8, 18],
                            data: [
                                {
                                    coord: [457, 0],
                                    itemStyle: {
                                        color: 'rgba(76, 210, 43, 1)'
                                    },
                                },
                                {
                                    coord: [232, 1],
                                    itemStyle: {
                                        color: 'rgba(35, 128, 238, 1)'
                                    },
                                },
                                {
                                    coord: [567, 2],
                                    itemStyle: {
                                        color: 'rgba(37, 190, 238, 1)'
                                    },
                                },
                            ],
                        },
                        data: [
                            {
                                value: 457,
                                itemStyle: {
                                    color: 'rgba(76, 210, 43, 0.5)',
                                }
                            },
                            {
                                value: 232,
                                itemStyle: {
                                    color: 'rgba(35, 128, 238, 0.5)',
                                }

                            },
                            {
                                value: 567,
                                itemStyle: {
                                    color: 'rgba(37, 190, 238, 0.5)',
                                }
                            }
                        ],
                    }
                ]
            }
        })

        const campusList = ['泥岗', '东门', '初中']
        const campusData = reactive([
            {
                dayVisit: 32,
                yearVisit: 1268,
                dayCirculation: 32,
                yearCirculation: 5392,
                campusDayDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 405,
                        height: 153,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            show: true,
                            onZero: false,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 6
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['10', '11', '12', '13', '14', '15'],
                    },
                    series: [
                        {
                            name: '借书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(52, 199, 232, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(52, 199, 232, 1)'
                                },
                                data: [
                                    { coord: [0, 46] },
                                    { coord: [1, 115] },
                                    { coord: [2, 25] },
                                    { coord: [3, 55] },
                                    { coord: [4, 45] },
                                    { coord: [5, 101] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 0.2)'
                            },
                            data: [46, 115, 25, 55, 45, 101],
                        },
                        {
                            name: '还书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(76, 210, 43, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(76, 210, 43, 1)'
                                },
                                data: [
                                    { coord: [0, 20] },
                                    { coord: [1, 45] },
                                    { coord: [2, 32] },
                                    { coord: [3, 62] },
                                    { coord: [4, 22] },
                                    { coord: [5, 44] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 0.2)'
                            },
                            data: [20, 45, 32, 62, 22, 44],
                        }

                    ]
                },
                campusYearDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 400,
                        height: 153,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7']
                    },
                    yAxis: {
                        type: 'value',
                        splitNumber: 5,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12,
                            formatter: function (value) {
                                return Math.round(value) + 'k';
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        }
                    },
                    series: [
                        {
                            data: [0.8, 2.9, 3.4, 2, 2.9, 1.6, 2.8],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 1)'
                            }
                        },
                        {
                            data: [1.5, 2.2, 2, 2.9, 2.5, 2.6, 2.9],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 1)'
                            }
                        }
                    ]
                }
            },
            {
                dayVisit: 68,
                yearVisit: 1268,
                dayCirculation: 32,
                yearCirculation: 5392,
                campusDayDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 405,
                        height: 153,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            show: true,
                            onZero: false,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 6
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['10', '11', '12', '13', '14', '15'],
                    },
                    series: [
                        {
                            name: '借书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(52, 199, 232, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(52, 199, 232, 1)'
                                },
                                data: [
                                    { coord: [0, 50] },
                                    { coord: [1, 150] },
                                    { coord: [2, 30] },
                                    { coord: [3, 25] },
                                    { coord: [4, 70] },
                                    { coord: [5, 120] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 0.2)'
                            },
                            data: [50, 150, 30, 25, 70, 120],
                        },
                        {
                            name: '还书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(76, 210, 43, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(76, 210, 43, 1)'
                                },
                                data: [
                                    { coord: [0, 40] },
                                    { coord: [1, 20] },
                                    { coord: [2, 55] },
                                    { coord: [3, 38] },
                                    { coord: [4, 56] },
                                    { coord: [5, 44] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 0.2)'
                            },
                            data: [40, 20, 55, 38, 56, 44],
                        }

                    ]
                },
                campusYearDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 400,
                        height: 153,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7']
                    },
                    yAxis: {
                        type: 'value',
                        splitNumber: 5,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12,
                            formatter: function (value) {
                                return Math.round(value) + 'k';
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        }
                    },
                    series: [
                        {
                            data: [2.5, 4.7, 4.6, 2.1, 3.4, 6.7, 2],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 1)'
                            }
                        },
                        {
                            data: [1.2, 2.4, 4.3, 2.5, 3.3, 5.6, 6],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 1)'
                            }
                        }
                    ]
                }
            },
            {
                dayVisit: 80,
                yearVisit: 1268,
                dayCirculation: 32,
                yearCirculation: 5392,
                campusDayDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 405,
                        height: 153,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            show: true,
                            onZero: false,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 6
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['10', '11', '12', '13', '14', '15'],
                    },
                    series: [
                        {
                            name: '借书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(52, 199, 232, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(52, 199, 232, 1)'
                                },
                                data: [
                                    { coord: [0, 48] },
                                    { coord: [1, 123] },
                                    { coord: [2, 77] },
                                    { coord: [3, 45] },
                                    { coord: [4, 69] },
                                    { coord: [5, 130] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 0.2)'
                            },
                            data: [48, 123, 77, 45, 69, 130],
                        },
                        {
                            name: '还书',
                            type: 'bar',
                            barWidth: 16,
                            label: {
                                show: true,
                                fontSize: 11,
                                position: 'top',
                                color: 'rgba(76, 210, 43, 1)',
                            },
                            markPoint: {
                                symbol: 'rect',
                                symbolSize: [16, 5],
                                itemStyle: {
                                    color: 'rgba(76, 210, 43, 1)'
                                },
                                data: [
                                    { coord: [0, 60] },
                                    { coord: [1, 30] },
                                    { coord: [2, 28] },
                                    { coord: [3, 60] },
                                    { coord: [4, 39] },
                                    { coord: [5, 56] },
                                ],
                            },
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 0.2)'
                            },
                            data: [60, 30, 28, 60, 39, 56],
                        }

                    ]
                },
                campusYearDataOptions: {
                    grid: {
                        left: 0,
                        bottom: 0,
                        width: 400,
                        height: 153,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7']
                    },
                    yAxis: {
                        type: 'value',
                        splitNumber: 5,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        },
                        axisLabel: {
                            color: 'rgba(75, 146, 186, 1)',
                            fontSize: 12,
                            margin: 12,
                            formatter: function (value) {
                                return Math.round(value) + 'k';
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(24, 127, 172, 0.2)'
                            }
                        }
                    },
                    series: [
                        {
                            data: [5, 6, 7, 6, 5, 6, 5],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(52, 199, 232, 1)'
                            }
                        },
                        {
                            data: [2, 3, 4, 3, 1, 3, 1],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                color: 'rgba(76, 210, 43, 1)'
                            }
                        }
                    ]
                }
            }
        ])
        let campusDayChart = ref([])
        let campusYearChart = ref([])
        onMounted(() => {

            new Swiper('.swiper.campus', {
                autoplay: {
                    delay: 3000,
                },
                // on: {
                //     slideChange() {
                //         const activeIndex = this.activeIndex;
                //         const activeDayChart = campusDayChart.value[activeIndex]
                //         const activeYearChart = campusYearChart.value[activeIndex]
                //         if (activeDayChart && activeYearChart) {
                //             activeDayChart.setOption(campusData[activeIndex]['campusDayDataOptions'])
                //             activeYearChart.setOption(campusData[activeIndex]['campusYearDataOptions'])
                //         }
                //     }
                // }
            })
        })

        const announcementContent = ref(null)
        const scrollContent = () => {
            let contentScrollTimer = null
            const contentDom = announcementContent.value
            const contentParent = contentDom.parentElement
            const contentHeight = contentDom.clientHeight
            const parentHeight = contentParent.clientHeight
            let scroll = 0
            if (contentHeight <= parentHeight) return
            contentScrollTimer = setInterval(() => {
                if (scroll + parentHeight < contentHeight) {
                    contentParent.scrollTop = scroll++
                } else {
                    contentParent.scrollTop = contentDom.scrollHeight
                    clearInterval(contentScrollTimer)
                    scroll = 0
                    setTimeout(() => {
                        scrollContent(announcementContent)
                    }, 1000)
                }
            }, 100)
        }
        onMounted(() => {
            scrollContent(announcementContent)
        })


        let libListActive = ref(true)
        let rankSwiper = null
        let curRankIndex = 0
        const rankSwiperClass = ['.swiper.lib-rank', '.swiper.reader-rank']
        const initSwiper = (swiperClass) => {
            rankSwiper = new Swiper(swiperClass, {
                direction: 'vertical',
                slidesPerView: 5,
                autoplay: {
                    delay: 3000
                },
                on: {
                    toEdge() {
                        if (rankSwiper.activeIndex == 2) {
                            if (curRankIndex) {
                                curRankIndex = 0
                            } else {
                                curRankIndex++
                            }
                            libListActive.value = !libListActive.value
                            nextTick(() => {
                                initSwiper(rankSwiperClass[curRankIndex])
                            })
                        }
                    }
                }
            })
        }
        onMounted(() => {
            initSwiper(rankSwiperClass[curRankIndex])
        })


        onMounted(() => {
            new Swiper('.swiper.recommend', {
                slidesPerView: 'auto',
                spaceBetween: 14,
                autoplay: {
                    delay: 3000
                }
            })

            new Swiper('.swiper.activity', {
                direction: 'vertical',
                slidesPerView: 2,
                autoplay: {
                    delay: 3000
                }
            })
        })

        const videoArr = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"]
        const curVideo = ref(0)
        const videoEnd = () => {
            console.log('videoEnded');
            curVideo.value++;
            if (curVideo.value >= videoArr.length) {
                curVideo.value = 0
            }
        }

        return {
            bookDataOptions,
            borrowDataOptions,

            // hideCampus,
            // campusIndex,
            // campusDayDataOptions,
            // campusYearDataOptions,

            campusList,
            campusData,
            campusDayChart,
            campusYearChart,

            announcementContent,
            libListActive,

            videoArr,
            curVideo,
            videoEnd
        }
    }
})

const VChart = app.component('v-chart', VueECharts)

app.mount('#app')

