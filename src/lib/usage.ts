/**
 * Usage Meter middleware logic for ApexFlow.
 * Simulates checking database records to enforce limits on Free vs Pro tiers.
 */

export const PLAN_LIMITS = {
    FREE: {
        maxRooms: 1,
        maxMembers: 3,
    },
    PRO: {
        maxRooms: 10,
        maxMembers: 15,
    },
    ENTERPRISE: {
        maxRooms: Infinity,
        maxMembers: Infinity,
    }
};

type WorkspaceTier = "FREE" | "PRO" | "ENTERPRISE";

export async function checkCanCreateRoom(workspaceId: string, currentTier: WorkspaceTier) {
    // In a real scenario, fetch db.room.count({ where: { workspaceId } })
    const currentRoomCount = 1; // Simulated

    const limit = PLAN_LIMITS[currentTier].maxRooms;
    if (currentRoomCount >= limit) {
        return {
            allowed: false,
            message: `You have reached the limit of ${limit} rooms on the ${currentTier} plan.`,
            requiresUpgrade: true
        };
    }

    return { allowed: true };
}

export async function checkCanAddMember(workspaceId: string, currentTier: WorkspaceTier) {
    const currentMemberCount = 3; // Simulated

    const limit = PLAN_LIMITS[currentTier].maxMembers;
    if (currentMemberCount >= limit) {
        return {
            allowed: false,
            message: `You have reached the limit of ${limit} members on the ${currentTier} plan.`,
            requiresUpgrade: true
        };
    }

    return { allowed: true };
}

export function getStripeCheckoutUrl(workspaceId: string, priceId: string) {
    // Generates checkout session URL to be called by frontend
    return `/api/billing/checkout?workspace_id=${workspaceId}&price_id=${priceId}`;
}
