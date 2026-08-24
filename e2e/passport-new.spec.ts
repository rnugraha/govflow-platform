import { expect, test } from "@playwright/test";

test.describe("New passport application — Personal Info step", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/passport/new");
	});

	test("renders the form with all required fields", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "New Passport Application" }),
		).toBeVisible();
		await expect(page.getByText("Personal Info").first()).toBeVisible();

		await expect(page.getByLabel(/First Name/)).toBeVisible();
		await expect(page.getByLabel(/Last Name/)).toBeVisible();
		await expect(page.getByLabel(/National ID Number/)).toBeVisible();
		await expect(page.getByLabel(/Date of Birth/)).toBeVisible();
		await expect(page.getByLabel(/Place of Birth/)).toBeVisible();
		await expect(page.getByLabel(/Current Address/)).toBeVisible();
		await expect(page.getByLabel(/Email Address/)).toBeVisible();
		await expect(page.getByLabel(/Mobile Number/)).toBeVisible();
	});

	test("shows the fee and required document sidebar", async ({ page }) => {
		await expect(page.getByText("Application Fee")).toBeVisible();
		await expect(page.getByText("€ 35")).toBeVisible();
		await expect(page.getByText("Required Documents")).toBeVisible();
	});

	test("fills out personal, contact, and passport details", async ({
		page,
	}) => {
		await page.getByLabel(/First Name/).fill("John");
		await page.getByLabel(/Last Name/).fill("Smith");
		await page.getByLabel(/National ID Number/).fill("3271000000000001");
		await page.getByLabel(/Date of Birth/).fill("1990-03-15");
		await page.getByLabel(/Place of Birth/).fill("Arkadia City");
		await page
			.getByLabel(/Current Address/)
			.fill("12 Jalan Merdeka, District 3, Arkadia City, 10110");
		await page.getByLabel(/Email Address/).fill("john.smith@example.com");
		await page.getByLabel(/Mobile Number/).fill("+62 812 3456 7890");

		await page.locator("#gender").click();
		await page.getByRole("option", { name: "Male", exact: true }).click();

		await page.locator("#passport-type").click();
		await page.getByRole("option", { name: "Regular (48 pages)" }).click();

		await page.locator("#processing").click();
		await page.getByRole("option", { name: /Standard \(3–5 days\)/ }).click();

		await page.locator("#office").click();
		await page.getByRole("option", { name: /Arkadia Central Office/ }).click();

		await expect(page.getByText("Male", { exact: true })).toBeVisible();
		await expect(
			page.getByText("Regular (48 pages)", { exact: true }),
		).toBeVisible();
	});

	test("navigates to the documents step", async ({ page }) => {
		await page.getByRole("link", { name: /Continue to Documents/i }).click();
		await expect(page).toHaveURL(/\/passport\/new\/documents$/);
	});

	test("cancel returns to the home page", async ({ page }) => {
		await page.getByRole("link", { name: "Cancel" }).click();
		await expect(page).toHaveURL("/");
	});
});

test.describe("New passport application — Documents step", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/passport/new/documents");
	});

	test("marks Personal Info as done and Documents as active", async ({
		page,
	}) => {
		await expect(page.getByText("Personal Info — complete")).toBeVisible();
		await expect(page.getByText("Documents — in progress")).toBeVisible();
	});

	test("lists every required and optional upload zone", async ({ page }) => {
		const uploadLabels = [
			"National ID Card — Front",
			"National ID Card — Back",
			"Birth Certificate",
			"Proof of Address",
			"Supporting Letter (if applicable)",
		];
		for (const label of uploadLabels) {
			await expect(
				page.getByText(label, { exact: true }).first(),
			).toBeVisible();
		}
		await expect(page.getByText("Optional", { exact: true })).toBeVisible();
	});

	test("navigates back to personal info", async ({ page }) => {
		await page.getByRole("link", { name: /Back to Personal Info/i }).click();
		await expect(page).toHaveURL(/\/passport\/new$/);
	});

	test("navigates forward to the review step", async ({ page }) => {
		await page.getByRole("link", { name: /Continue to Review/i }).click();
		await expect(page).toHaveURL(/\/passport\/new\/review$/);
	});
});

test.describe("New passport application — Review step", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/passport/new/review");
	});

	test("shows Review & Pay as the active step", async ({ page }) => {
		await expect(page.getByText("Personal Info — complete")).toBeVisible();
		await expect(page.getByText("Documents — complete")).toBeVisible();
		await expect(page.getByText("Review & Pay — in progress")).toBeVisible();
	});

	test("displays applicant, contact, and passport summary", async ({
		page,
	}) => {
		await expect(page.getByText("John", { exact: true })).toBeVisible();
		await expect(page.getByText("Smith", { exact: true })).toBeVisible();
		await expect(page.getByText("john.smith@example.com")).toBeVisible();
		await expect(
			page.getByText("Regular (48 pages)", { exact: true }),
		).toBeVisible();
	});

	test("shows uploaded document statuses", async ({ page }) => {
		await expect(page.getByText("Supporting Letter (optional)")).toBeVisible();
		await expect(page.getByText("Not provided")).toBeVisible();
		await expect(page.getByText("Uploaded").first()).toBeVisible();
	});

	test("displays the total fee due", async ({ page }) => {
		await expect(page.getByText("Total due")).toBeVisible();
		await expect(page.getByText("€ 35").first()).toBeVisible();
	});

	test("submits the application and reaches the confirmation page", async ({
		page,
	}) => {
		await page.getByRole("link", { name: /Submit Application/i }).click();
		await expect(page).toHaveURL(/\/passport\/new\/confirmation$/);
	});
});

test.describe("New passport application — Confirmation step", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/passport/new/confirmation");
	});

	test("shows a success message with a reference number", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Application Submitted!" }),
		).toBeVisible();
		await expect(page.getByText("PA-2026-047821").first()).toBeVisible();
	});

	test("lists the next steps and office locations", async ({ page }) => {
		await expect(page.getByText("What Happens Next")).toBeVisible();
		await expect(page.getByText("Passport Office Locations")).toBeVisible();
		await expect(page.getByText("Arkadia Central Office")).toBeVisible();
	});

	test("returns to the portal home page", async ({ page }) => {
		await page.getByRole("link", { name: /Back to Portal/i }).click();
		await expect(page).toHaveURL("/");
	});
});
