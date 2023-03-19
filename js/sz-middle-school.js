const { createApp, ref, onMounted, onUnmounted, nextTick } = Vue

const app = createApp({
    // template: '#app',
    setup() {
        const bookDataOptions = ref(null)
        const borrowDataOptions = ref(null)
        const campusDayDataOptions = ref(null)
        const campusYearDataOptions = ref(null)

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

        
        let libListActive = ref(true)
        const toggleLibListActive = () => {
            setInterval(() => {
                libListActive.value = !libListActive.value
            }, 1800)  //180000
        }

        const videoArr = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"]
        const curVideo = ref(0)
        const videoEnd = () => {
            console.log('aaaa');
            curVideo.value++;
            if (curVideo.value >= videoArr.length) {
                curVideo.value = 0
            }
        }

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
                            formatter: function(params) {
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
                            position: 'insideRight',
                            offset: [-13, 0]
                        },
                        data: [
                            {
                                value: 457,
                                itemStyle: {
                                    color: 'rgba(76, 210, 43, 0.5)',
                                },
                            },
                            {
                                value: 232,
                                itemStyle: {
                                    color: 'rgba(35, 128, 238, 0.5)',
                                },

                            },
                            {
                                value: 567,
                                itemStyle: {
                                    color: 'rgba(37, 190, 238, 0.5)',
                                },
                            }
                        ],
                    },
                    {
                        type: 'custom',
                        renderItem: function (params, api) {
                            const categoryIndex = api.value(0);
                            const value = api.value(1);
                            const color = api.value(2);
                            const point = api.coord([value, categoryIndex]);

                            return {
                                type: 'rect',
                                shape: {
                                    x: point[0] - 8,
                                    y: point[1] - 9,
                                    width: 8,
                                    height: 18
                                },
                                style: {
                                    fill: color
                                }
                            };
                        },
                        data: [
                            { value: [0, 457, 'rgba(76, 210, 43, 1)'] },
                            { value: [1, 232, 'rgba(35, 128, 238, 1)'] },
                            { value: [2, 567, 'rgba(37, 190, 238, 1)'] }
                        ],
                    }
                ]
            }

            campusDayDataOptions.value = {
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
            }

            campusYearDataOptions.value = {
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
                    min:0,
                    max:5,
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
                        symbol:'circle',
                        symbolSize: 6,
                        itemStyle: {
                            color: 'rgba(52, 199, 232, 1)'
                        }
                    },
                    {
                        data: [1.5, 2.2, 2, 2.9, 2.5, 2.6, 2.9],
                        type: 'line',
                        symbol:'circle',
                        symbolSize: 6,
                        itemStyle: {
                            color: 'rgba(76, 210, 43, 1)'
                        }
                    }
                ]
            };

            scrollContent(announcementContent)
            toggleLibListActive()
            new Swiper('.swiper', {
                slidesPerView: 'auto',
                spaceBetween: 14,
                autoplay: {
                    delay: 3000
                }
            })
        })



        return {
            bookDataOptions,
            borrowDataOptions,
            campusDayDataOptions,
            campusYearDataOptions,

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

