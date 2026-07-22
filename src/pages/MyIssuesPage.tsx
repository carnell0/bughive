function MyIssuesPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">My Issues</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-gray-400 px-4">
        <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-sm font-medium text-gray-500">No assigned issues yet</p>
        <p className="text-xs mt-1 text-center max-w-xs">Ticket assignment is coming soon — you'll see your assigned tickets here.</p>
      </div>
    </div>
  )
}

export default MyIssuesPage
