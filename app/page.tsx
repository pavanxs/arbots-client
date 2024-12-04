'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  MessageCircle, 
  Coins, 
  TrendingUp,
  Bot,
  Activity 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// Sample data - in a real app this would come from your API
const engagementData = [
  { day: 'Mon', messages: 240, rewards: 450 },
  { day: 'Tue', messages: 300, rewards: 520 },
  { day: 'Wed', messages: 280, rewards: 490 },
  { day: 'Thu', messages: 420, rewards: 780 },
  { day: 'Fri', messages: 380, rewards: 680 },
  { day: 'Sat', messages: 290, rewards: 510 },
  { day: 'Sun', messages: 310, rewards: 560 },
]

export default function Component() {
  return (
    <div className="container flex flex-col mx-auto  space-y-4 p-4 md:p-8 pt-6">
      <div className="flex  items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">AI Community Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Communities</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+180 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Interactions</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.8k</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Distributed</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48,302 USDT</div>
            <p className="text-xs text-muted-foreground">+8,302 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24.5%</div>
            <p className="text-xs text-muted-foreground">+4.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="messages" 
                    stroke="#8884d8" 
                    name="Messages"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rewards" 
                    stroke="#82ca9d" 
                    name="Rewards"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  community: "Crypto Traders Hub",
                  action: "Reward Distribution",
                  amount: "520 USDT",
                  time: "2 minutes ago"
                },
                {
                  community: "NFT Collectors",
                  action: "AI Interaction",
                  amount: "180 msgs",
                  time: "5 minutes ago"
                },
                {
                  community: "DeFi Discussion",
                  action: "New Members",
                  amount: "+12",
                  time: "10 minutes ago"
                },
                {
                  community: "Web3 Developers",
                  action: "Reward Distribution",
                  amount: "320 USDT",
                  time: "15 minutes ago"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{item.community}</p>
                    <p className="text-sm text-muted-foreground">{item.action}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.amount}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="max-w-full">
        <CardHeader>
          <CardTitle>Top Performing Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Crypto Traders Hub",
                members: "12.4k",
                engagement: "92%",
                rewards: "12,450 USDT"
              },
              {
                name: "NFT Collectors",
                members: "8.2k",
                engagement: "88%",
                rewards: "8,320 USDT"
              },
              {
                name: "DeFi Discussion",
                members: "6.8k",
                engagement: "85%",
                rewards: "6,180 USDT"
              }
            ].map((community, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="font-medium">{community.name}</p>
                  <p className="text-sm text-muted-foreground">{community.members} members</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium">{community.rewards}</p>
                  <p className="text-sm text-muted-foreground">Engagement: {community.engagement}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
