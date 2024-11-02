---
title: 'About Me!'
image: '/hello-world/kita-ikuyo.jpg'
alt: 'Shellkai Huang'
created: 2022-11-25
updated: 2024-09-22
---
<script lang="ts">
  
import Profile from '$lib/components/extra/profile.svelte';
// pnpm install svelte-vertical-timeline
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent
  } from 'svelte-vertical-timeline';
  const options = [
	{ title: '臺北市國中小學生 Scratch 貓咪盃「創意遊戲」國中組 入選', time: '2020' },
	{ title: '第 53 屆全國技能競賽分區北區賽 39 資訊與網路技術 佳作 (rk.12)', time: '2023' },
	{ title: '桃園國際新創機器人節 (TIRT) T1 智能賽車組 & 機器人划龍舟組', time: '2023' },
	{ title: '112 年度資安技能金盾獎', time: '2023' },
	{ title: '第 54 屆全國技能競賽分區北區賽 39 資訊與網路技術 金牌 (rk.1)', time: '2024' },
	{ title: '第 54 屆全國技能競賽全國賽 ⠀39 資訊與網路技術 銅牌 (rk.3)', time: '2024' }
	];
	 const cert = [
	{ title: 'GEPT 全民英檢 初級', time: '2020' },
	{ title: '中華民國技術士證 電腦硬體裝修 丙級 (No. 120-0293048)', time: '2023' }
	{ title: '中華民國技術士證 電腦硬體裝修 乙級 (No. 120-0059880)', time: '2024'}
	];

import { onMount } from 'svelte';

  export let birthday = '2006-10-09';

  let age = 0;

  function calculateAge() {
    const birthDate = new Date(birthday);
    const now = new Date();
    const diff = now - birthDate;
    age = diff / (1000 * 60 * 60 * 24 * 365.25);
  }

  onMount(() => {
    calculateAge();
    const interval = setInterval(calculateAge, 50);

    return () => clearInterval(interval);
  });
</script>

## 關於我

<Profile subname="ShellkaiTW" bio={`「每一次新的嘗試，皆是在未知中探索著，且學習著。」`} >

<div class="flex flex-col md:flex-row gap-4 mt-4">
<a href="https://bit.ly/shellkai" rel="noopener external" target="_blank" class="group flex-1 relative overflow-hidden btn btn-block normal-case border-none no-underline bg-[#5865f2] hover:bg-[#7983f5]">
  <span class="i-simple-icons-discord absolute w-16 h-16 right-10 opacity-20 fill-white transform-gpu transition-transform ease-in-out duration-500 group-hover:scale-125" />
  <span class="z-10 !text-white">My own server: i realized here's mod is shellkai</span>
</a>
</div>
</Profile>

安安，我是 Shellkai，是個已經 {age.toFixed(10)} 歲的人類，就讀高職資訊科三年級，從一台 Android 手機開啟了我的資訊之旅，目前專攻於伺服器架設（Windows Server、Linux）、網管設備建置（Cisco Devices）、網路規劃及簡易的 Windows Server 及 Linux 的系統安全強化，希望未來能朝著資安的方向前進！

## 競賽
<Timeline position="alternate">
	{#each options as option}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p>{option.time}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot style={'background-color: #7CD5E2;'}/>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
More Coming Soon...

## 證照
<Timeline position="alternate">
	{#each cert as option}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p>{option.time}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot style={'background-color: #7CD5E2;'}/>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

### 待考取 & 希望考取證照
* iPAS 資訊安全工程師 初級
* CCNA 思科認證網路工程師
* RHCE (Red Hat Certified Engineer)

## 授課 / 其他經驗
* 2023 敝校社團 - 黑客 IT 社 工作室網路架設課程講師 & 活動長
* 2024 敝校資訊技術中心@選手室 設備管理員