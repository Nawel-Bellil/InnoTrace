import React from 'react';
import { dashboardData } from '../constants/data';

const Dashboard = () => {
  const { totalUsers, totalProduction, energyConsumption, machinesFunctioning, activity, weakestTopics, strongestTopics, analytics } = dashboardData;

  return (
    <div className="p-6 bg-white">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Users" value={totalUsers} />
        <StatCard label="Total Production" value={totalProduction} />
        <StatCard label="Energy Consumption" value={energyConsumption} />
        <StatCard label="Machines Functioning" value={machinesFunctioning} />
      </div>

      {/* Activity Graph */}
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h3 className="font-bold text-lg">Activity</h3>
        <div className="flex space-x-2 mt-4">
          {activity.map((value, index) => (
            <div key={index} className="bg-blue-500 h-20 w-4" style={{ height: `${value * 2}px` }}></div>
          ))}
        </div>
      </div>

      {/* Weakest and Strongest Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TopicList title="Weakest Topics" topics={weakestTopics} />
        <TopicList title="Strongest Topics" topics={strongestTopics} />
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnalyticsCard label="Active Users" value={`${analytics.activeUsers} hours`} />
        <AnalyticsCard label="Questions Answered" value={analytics.questionsAnswered} />
        <AnalyticsCard label="Avg Session Length" value={analytics.avgSessionLength} />
        <AnalyticsCard label="Starting Knowledge" value={`${analytics.startingKnowledge}%`} />
        <AnalyticsCard label="Current Knowledge" value={`${analytics.currentKnowledge}%`} />
        <AnalyticsCard label="Knowledge Gain" value={`+${analytics.knowledgeGain}%`} />
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded-md shadow-sm">
    <h4 className="text-sm font-semibold">{label}</h4>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const TopicList = ({ title, topics }) => (
  <div className="bg-gray-50 p-4 rounded-md shadow-sm">
    <h3 className="font-bold text-lg">{title}</h3>
    <ul>
      {topics.map((topic, index) => (
        <li key={index} className="flex justify-between mt-2">
          <span>{topic.topic}</span>
          <span>{topic.score}% Correct</span>
        </li>
      ))}
    </ul>
  </div>
);

const AnalyticsCard = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded-md shadow-sm">
    <h4 className="text-sm font-semibold">{label}</h4>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
