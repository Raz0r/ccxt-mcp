/**
 * 시장 관련 리소스를 정의합니다.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CcxtMcpServer } from "../server.js";
/**
 * 시장 관련 리소스를 서버에 등록합니다.
 */
export declare function registerMarketResources(server: McpServer, ccxtServer: CcxtMcpServer): void;
