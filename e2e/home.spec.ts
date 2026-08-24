import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("renders the header and hero", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: /your city services/i }),
		).toBeVisible();
		await expect(
			page.getByRole("link", { name: "Municipality of Arkadia" }),
		).toBeVisible();
	});

	test("navigates to the passport application from the hero CTA", async ({
		page,
	}) => {
		await page
			.getByRole("link", { name: /apply for passport/i })
			.first()
			.click();
		await expect(page).toHaveURL(/\/passport\/new$/);
	});

	test("lists all citizen services", async ({ page }) => {
		const servicesSection = page.locator("#services");
		await expect(
			servicesSection.getByRole("heading", { name: "Citizen Services" }),
		).toBeVisible();

		const serviceTitles = [
			"Passport Application",
			"National ID Card",
			"Birth Certificate",
			"Business License",
			"Marriage Certificate",
			"Property Records",
		];
		for (const title of serviceTitles) {
			await expect(
				servicesSection.getByText(title, { exact: true }),
			).toBeVisible();
		}
	});

	test("displays key stats", async ({ page }) => {
		await expect(page.getByText("47,200+", { exact: true })).toBeVisible();
		await expect(page.getByText("Citizens Served")).toBeVisible();
	});

	test("shows the latest announcements", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Latest Announcements" }),
		).toBeVisible();
		await expect(
			page.getByText("Extended Passport Service Hours During Summer Season"),
		).toBeVisible();
	});

	test("footer links to services and municipality pages", async ({ page }) => {
		const footer = page.locator("footer");
		await expect(
			footer.getByRole("heading", { name: "Quick Services" }),
		).toBeVisible();
		await expect(
			footer.getByText("© 2026 Municipality of Arkadia. All rights reserved."),
		).toBeVisible();
	});
});
