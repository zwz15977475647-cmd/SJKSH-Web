/**
 * 瓷韵千年 - Chart.js 通用配置
 * 统一图表样式，避免每个页面重复配置
 */

window.ChartConfig = {
    // 通用颜色方案
    colors: {
        clay: '#8B5A2B',
        porcelain: '#F5F5F0',
        glaze: '#4A90E2',
        fire: '#E64A19',
        earth: '#D2B48C',
        ink: '#2C3E50',
        green: '#2ECC71',
        blue: '#3498DB',
        orange: '#F39C12',
        red: '#E74C3C',
        purple: '#9B59B6',
        slate: '#34495E'
    },

    // 标准图表选项
    standardOptions: {
        responsive: true,
        maintainAspectRatio: false
    },

    // 暗色主题图表选项（用于 data.html 深色背景）
    darkOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'rgba(255,255,255,0.7)',
                    font: { size: 11 }
                }
            }
        },
        scales: {
            y: {
                ticks: { color: 'rgba(255,255,255,0.7)' },
                grid: { color: 'rgba(255,255,255,0.1)' }
            },
            x: {
                ticks: { color: 'rgba(255,255,255,0.7)' },
                grid: { color: 'rgba(255,255,255,0.1)' }
            }
        }
    },

    // 亮色主题图表选项（用于 process.html 白色背景）
    lightOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 11 } }
            }
        }
    },

    // 创建饼图配置（新增取消悬浮放大配置）
    createPieConfig: function(labels, data, colors, title) {
        return {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                ...this.lightOptions,
                // 核心：关闭鼠标悬浮扇区放大弹出效果
                elements: {
                    arc: {
                        hoverOffset: 0
                    }
                },
                plugins: {
                    ...this.lightOptions.plugins,
                    title: {
                        display: true,
                        text: title,
                        font: { size: 14, weight: 'bold' }
                    }
                }
            }
        };
    },

    // 创建环形图配置（新增取消悬浮放大配置）
    createDoughnutConfig: function(labels, data, colors, title) {
        return {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                ...this.lightOptions,
                // 核心：关闭鼠标悬浮扇区放大弹出效果
                elements: {
                    arc: {
                        hoverOffset: 0
                    }
                },
                plugins: {
                    ...this.lightOptions.plugins,
                    title: {
                        display: true,
                        text: title,
                        font: { size: 14, weight: 'bold' }
                    }
                }
            }
        };
    },

    // 创建柱状图配置
    createBarConfig: function(labels, datasets, title) {
        return {
            type: 'bar',
            data: { labels: labels, datasets: datasets },
            options: {
                ...this.lightOptions,
                plugins: {
                    legend: { position: 'bottom' },
                    title: {
                        display: true,
                        text: title,
                        font: { size: 14, weight: 'bold' }
                    }
                },
                scales: { y: { beginAtZero: true } }
            }
        };
    },

    // 创建折线图配置
    createLineConfig: function(labels, datasets, title, darkMode) {
        const baseOptions = darkMode ? this.darkOptions : this.lightOptions;
        return {
            type: 'line',
            data: { labels: labels, datasets: datasets },
            options: {
                ...baseOptions,
                plugins: {
                    ...baseOptions.plugins,
                    title: {
                        display: true,
                        text: title,
                        font: { size: 14, weight: 'bold' },
                        color: darkMode ? '#fff' : '#2C3E50'
                    }
                },
                scales: {
                    ...baseOptions.scales,
                    y: {
                        ...(baseOptions.scales ? baseOptions.scales.y : {}),
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '数值',
                            color: darkMode ? 'rgba(255,255,255,0.7)' : '#2C3E50'
                        }
                    },
                    x: {
                        ...(baseOptions.scales ? baseOptions.scales.x : {}),
                        title: {
                            display: true,
                            text: '时间',
                            color: darkMode ? 'rgba(255,255,255,0.7)' : '#2C3E50'
                        }
                    }
                }
            }
        };
    }
};
