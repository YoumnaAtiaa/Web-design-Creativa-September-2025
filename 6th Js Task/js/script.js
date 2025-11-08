let data = [];
      const tableBody = document.getElementById("tableBody");
      const nameInput = document.getElementById("nameInput");
      const addBtn = document.getElementById("addBtn");

      function renderTable() {
        tableBody.innerHTML = "";
        data.forEach((item, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item}</td>
            <td>
              <button class="btn btn-danger btn-sm deleteBtn" data-index="${index}">
                Delete
              </button>
            </td>`;
          tableBody.appendChild(row);
        });

        const deleteButtons = document.querySelectorAll(".deleteBtn");
        deleteButtons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            data.splice(index, 1);
            renderTable();
          });
        });
      }

      addBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
          data.push(name);
          nameInput.value = "";
          renderTable();
        }
      });
