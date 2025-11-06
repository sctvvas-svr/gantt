google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const container = document.getElementById("chart");
  const chart = new google.visualization.Timeline(container);
  const dataTable = new google.visualization.DataTable();

  // Định nghĩa các cột dữ liệu
  dataTable.addColumn({ type: 'string', id: 'Group' });
  dataTable.addColumn({ type: 'string', id: 'Task' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });

  // Dữ liệu mẫu (sau này sẽ thay bằng dữ liệu Looker Studio)
  dataTable.addRows([
    [ 'Triển khai kéo cáp', 'Khảo sát', new Date(2025,10,7), new Date(2025,10,9) ],
    [ 'Triển khai kéo cáp', 'Kéo cáp', new Date(2025,10,9), new Date(2025,10,11) ]
  ]);

  // Vẽ chart
  chart.draw(dataTable, {
    timeline: { showRowLabels: true },
    colors: ['#e7711c', '#4374e0']
  });
}
