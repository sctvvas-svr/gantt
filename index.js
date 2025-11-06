const dscc = window.dscc;

function drawGantt(data, config) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "8px";
  container.style.fontFamily = "Arial, sans-serif";

  const color = config.barColor || "#4285F4";
  const height = config.barHeight || 20;
  const showLabels = config.showLabels !== false;

  data.tables.DEFAULT.forEach(row => {
    const task = row.dimID[0];
    const start = new Date(row.dimID[1]);
    const end = new Date(row.dimID[2]);
    const duration = (end - start) / (1000 * 60 * 60 * 24);

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "8px";

    const bar = document.createElement("div");
    bar.style.backgroundColor = color;
    bar.style.height = `${height}px`;
    bar.style.width = `${duration * 15}px`;
    bar.style.borderRadius = "4px";

    if (showLabels) {
      const label = document.createElement("span");
      label.textContent = `${task} (${duration}d)`;
      label.style.fontSize = "12px";
      wrapper.appendChild(label);
    }

    wrapper.appendChild(bar);
    container.appendChild(wrapper);
  });

  document.body.innerHTML = "";
  document.body.appendChild(container);
}

dscc.subscribeToData(drawGantt, { transform: dscc.tableTransform });
