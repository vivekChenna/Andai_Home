import { Bot, Workflow, Zap } from 'lucide-react'

const features = [
  {
    icon: <Workflow className="h-10 w-10 text-blue-500" />,
    title: 'AI Workflows',
    description: 'Streamline your processes with intelligent automation.'
  },
  {
    icon: <Bot className="h-10 w-10 text-green-500" />,
    title: 'AI Agents',
    description: 'Deploy smart agents to handle complex tasks autonomously.'
  },
  {
    icon: <Zap className="h-10 w-10 text-yellow-500" />,
    title: 'AI Chatbots',
    description: 'Engage customers with advanced, context-aware chatbots.'
  }
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

