// media.js

function media(n) {
    // 获取 player div 元素
    const player = document.getElementById('player');
    
    // 清空之前的内容
    player.innerHTML = '';
    
    // 创建一个新的 video 元素
    const video = document.createElement('video');
    video.src = `./media/${n}_x264.mp4`; // 设置视频源路径
    video.controls = true; // 显示控制条
    video.autoplay = true; // 自动播放
    video.style.width = '100%'; // 设置宽度为100%
    video.style.height = 'auto'; // 高度自动，根据宽度和视频比例调整
    video.style.maxHeight = '90%'; // 高度最多为容器的90%
   
    // 处理视频加载错误
    video.onerror = function() {
        player.innerHTML = '<p style="color: red; text-align: center;">视频无法加载。</p>';
    };
    
    // 将 video 元素添加到 player div 中
    player.appendChild(video);
}
