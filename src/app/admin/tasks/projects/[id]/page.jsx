import ProjectDashboard from "@/components/tasks/ProjectDashboard";

export const metadata = {
    title: "Project Progress Dashboard | HR System",
    description: "Detailed tracking and analytics for your project",
};

export default function ProjectDetailPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <ProjectDashboard />
        </div>
    );
}
