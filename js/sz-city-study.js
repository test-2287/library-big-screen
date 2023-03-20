const { createApp, ref, onMounted, onUnmounted, nextTick } = Vue

const app = createApp({
    // template: '#app',
    setup() {
        const dailyTrafficOptions = ref(null)
        onMounted(() => {
            dailyTrafficOptions.value = {
                grid: {
                    left: 0,
                    right: '2%',
                    top: '5%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 12,
                        margin: 13
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                            type: [2, 2]
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '8'],
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 12,
                        margin: 7,
                        formatter: function (value) {
                            let labelValue = Math.round(value / 1000)
                            return labelValue ? `${labelValue}k` : 0;
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                            type: [2, 2]
                        }
                    }
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            color: 'rgba(37, 203, 255, 1)'
                        },
                        symbolSize: 6,
                        symbol: function (value, params) {
                            if (params.dataIndex === 0 || params.dataIndex === 7) {
                                return 'none';
                            }
                            return 'circle';
                        },
                        label: {
                            show: true,
                            position: 'top',
                            distance: 5,
                            fontSize: 10,
                            color: 'rgba(37, 203, 255, 1)',
                            formatter: function (params) {
                                if (params.dataIndex === 0 || params.dataIndex === 7) {
                                    return '';
                                }
                                return params.value;
                            }
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(30, 220, 247, 0.4)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(49, 107, 255, 0)'
                                }
                            ])
                        },
                        itemStyle: {
                            color: 'rgba(37, 203, 255, 1)'
                        },
                        data: [1230, 1530, 2753, 4037, 2056, 3168, 2388, 2471]
                    }
                ]
            };
        })

        const weekBorrowOptions = ref(null)
        onMounted(() => {
            weekBorrowOptions.value = {
                grid: {
                    left: 0,
                    bottom: 0,
                    right: '5%',
                    top: '15%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 11,
                        margin: 4,
                        formatter: function (value) {
                            return value < 0 ? -value : value;
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 11,
                        margin: 10
                    },
                    data: ['7', '8', '9', '10', '11', '12', '13']
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'stack1',
                        barWidth: 12,
                        itemStyle: {
                            borderRadius: [0, 6, 6, 0],
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    { offset: 0, color: 'rgba(70, 100, 255, 1)' },
                                    { offset: 1, color: 'rgba(70, 100, 255, 0)' }
                                ]
                            }
                        },
                        label: {
                            show: true,
                            position: 'outside',
                            fontSize: 10,
                            color: 'rgba(128, 163, 255, 1)',
                            distance: 4
                        },
                        data: [163, 271, 101, 159, 98, 192, 69]
                    },
                    {
                        type: 'bar',
                        stack: 'stack1',
                        barWidth: 12,
                        itemStyle: {
                            borderRadius: [6, 0, 0, 6],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    { offset: 0, color: 'rgba(49, 228, 252, 1)' },
                                    { offset: 0.9, color: 'rgba(49, 228, 252, 0)' },
                                    { offset: 1, color: 'rgba(49, 228, 252, 0)' }
                                ]
                            }
                        },
                        label: {
                            show: true,
                            position: 'outside',
                            fontSize: 10,
                            color: 'rgba(48, 227, 252, 1)',
                            distance: 4,
                            formatter: function (params) {
                                return Math.abs(params.value)
                            }
                        },
                        data: [-288, -56, -257, -231, -102, -267, -158]
                    }
                ]
            };
        })

        const dailyRegisterOptions = ref(null)
        onMounted(() => {
            dailyRegisterOptions.value = {
                grid: {
                    left: 0,
                    bottom: 0,
                    right: '5%',
                    top: '5%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 11,
                        margin: 4
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)'
                        }
                    },
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(36, 55, 103, 1)',
                        }
                    },
                    axisLabel: {
                        color: 'rgba(140, 157, 200, 1)',
                        fontSize: 11,
                        margin: 10
                    },
                    data: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'stack1',
                        barWidth: 12,
                        itemStyle: {
                            borderRadius: [6, 6, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: 'rgba(70, 100, 255, 1)' },
                                    { offset: 1, color: 'rgba(70, 100, 255, 0)' }
                                ]
                            }
                        },
                        label: {
                            show: true,
                            position: 'outside',
                            fontSize: 10,
                            color: 'rgba(128, 163, 255, 1)',
                            distance: 2
                        },
                        data: [26, 38, 24, 43, 18, 51, 29, 37, 46, 38, 27]
                    }
                ]
            };
        })

        onMounted(() => {
            new Swiper('.swiper', {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000
                }
            })
        })


        let number1 = 120
        let number2 = 282
        let number3 = 3185
        let number4 = 24829
        const digitLength = 5
        const numberGrow = (number, eleClass) => {
            let numberStr = String(number)
            numberStr = numberStr.padStart(digitLength, 0)
            const numberBoxDom = document.querySelector(eleClass)
            const digitElements = numberBoxDom.children
            numberStr.split('').forEach((value, index) => {
                value = Number(value)
                if (!value) {
                    if (!!Number(numberStr[index - 1])) {
                        digitElements[index].classList.add('light')
                    }
                } else {
                    digitElements[index].classList.add('light')
                    for (let i = 0; i <= value; i++) {
                        setTimeout(() => {
                            digitElements[index].innerHTML = i
                        }, i * 100)
                    }
                }
            })
        }
        onMounted(() => {
            numberGrow(number1, '.today .headcount .number-box')
            numberGrow(number2, '.today .book-count .number-box')
            numberGrow(number3, '.year .headcount .number-box')
            numberGrow(number4, '.year .book-count .number-box')
        })


        const videoArr = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"]
        const curVideo = ref(0)
        const videoEnd = () => {
            curVideo.value++;
            if (curVideo.value >= videoArr.length) {
                curVideo.value = 0
            }
        }


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
            scrollContent()
        })

        return {
            dailyTrafficOptions,
            weekBorrowOptions,
            dailyRegisterOptions,

            videoEnd,
            videoArr,
            curVideo,

            announcementContent
        }
    }
})

const VChart = app.component('v-chart', VueECharts)

app.mount('#app')