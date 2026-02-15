// js/shared.js

export function getSegmentColor(fill) {
    if (fill <= 2) return '#44ce1b';
    if (fill <= 4) return '#e0ff30';
    if (fill <= 6) return '#fff830';
    if (fill <= 8) return '#ff9538';
    if (fill <= 10) return '#ff362b';
    return '#c0392b';
}

export function createDensityBar(fillCount, isDisabled = false) {
    const bar = document.createElement('div');
    bar.className = 'density-bar';
    if (isDisabled) bar.style.background = '#dfe6e9';

    for (let i = 0; i < 10; i++) {
        const seg = document.createElement('div');
        seg.className = 'segment';
        seg.style.background = isDisabled 
            ? '#bdc3c7' 
            : (i < fillCount ? getSegmentColor(fillCount) : '#ebedef');
        bar.appendChild(seg);
    }
    return bar;
}

export function renderBlock(container, block, currentIndex, totalBlocks) {
    container.innerHTML = '';

    const blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    blockDiv.innerHTML = `<h2>${block.name}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'floors-grid';

    for (let f = 1; f <= block.floors; f++) {
        const isDisabled = block.disabledFloors.includes(f);
        const density = isDisabled ? 0 : (block.densities[f-1] || 0);

        const item = document.createElement('div');
        item.className = 'floor-item' + (isDisabled ? ' disabled' : '');

        // Label
        const label = document.createElement('div');
        label.className = 'floor-label';

        const floorNum = f;
        const customName = block.floorNames[floorNum - 1];

        if (customName) {
            label.textContent = customName;
            if (customName === "-1F" || customName.toLowerCase().includes("b")) {
                label.classList.add('basement');
            } else if (customName.toLowerCase().includes("roof")) {
                label.classList.add('rooftop');
            }
        } else {
            label.textContent = `Floor ${floorNum}`;
        }

        item.appendChild(label);

// inside the for loop in renderBlock()

        if (isDisabled) {
            const reason = block.disabledReasons?.[floorNum] || "Disabled";
            
            const status = document.createElement('div');
            status.className = 'floor-status';
            status.textContent = reason;                    // ← changed
            // Optional: make it tooltip or smaller font if reasons are long
            // status.title = reason;   // hover shows full text
            item.appendChild(status);
        } else {
            const bar = createDensityBar(density);
            item.appendChild(bar);
        }

        // Spacer for consistent height
        const spacer = document.createElement('div');
        spacer.style.height = '22px';
        spacer.style.visibility = isDisabled ? 'visible' : 'hidden';
        item.appendChild(spacer);

        grid.appendChild(item);
    }

    blockDiv.appendChild(grid);
    container.appendChild(blockDiv);

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex >= totalBlocks - 1;
}

export function initLastUpdated() {
    const pageLoadTime = Date.now();
    const lastUpdateEl = document.getElementById('lastUpdate');

    function update() {
        const minutes = Math.floor((Date.now() - pageLoadTime) / 60000);
        const text = minutes === 0 ? "just now" : `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        lastUpdateEl.textContent = `Last updated: ${text}`;
    }

    setInterval(update, 60000);
    update(); // initial call
}

export function initModal() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;

    document.getElementById('infoBtn')?.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    document.getElementById('closeModal')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
}